export type FormErrorSchema<T> = {
  [Key in keyof T]?: string;
};
