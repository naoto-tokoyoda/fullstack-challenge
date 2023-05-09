// helpers/getJwt.ts
export const getJwt = (): string | null => {
    return localStorage.getItem('jwt');
  };
  