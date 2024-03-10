import {
  Action,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import geoApi from '../../api/geoApi';
import { GeoCoordinatesModel } from '../../models/GeoCoordinatesModel';

type RejectedAction = Action & { error: Error };

function isRejectedAction(action: Action): action is RejectedAction {
  return action.type.endsWith('rejected');
}

export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
  if (!navigator) {
    alert('Geolocation is not supported by this browser.');
    return;
  }

  const geoPosition: GeolocationPosition = await new Promise(
    (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position),
        (error) => reject(error),
      );
    },
  );
  const position: GeoCoordinatesModel = {
    latitude: geoPosition.coords.latitude,
    longitude: geoPosition.coords.longitude,
  };

  const geoAddress = await geoApi(position);
  const address = `${geoAddress.locality}, ${geoAddress.city} ${geoAddress.postcode}, ${geoAddress.countryName}`;

  return { position, address };
});

type UserState = {
  username: string;
  geoState: 'idle' | 'loading' | 'fulfilled' | 'rejected';
  position?: GeoCoordinatesModel;
  address?: string;
  errorMessage?: string;
};

const initialState: UserState = {
  username: '',
  geoState: 'idle',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.geoState = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.geoState = 'fulfilled';

        if (!action.payload) {
          return;
        }

        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addMatcher(isRejectedAction, (state) => {
        state.geoState = 'rejected';
        // state.errorMessage = action.error.message;
        state.errorMessage =
          'Please enable location services to proceed, or enter your address manually. Make sure your address is correct and complete. Geolocation is recommended for accurate delivery time estimation.';
      })
      .addDefaultCase((state) => state);
  },
});

export const { setUsername } = userSlice.actions;

export default userSlice.reducer;
