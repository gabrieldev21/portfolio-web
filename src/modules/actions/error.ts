export function errorApproach(error: any) {
  if (error.message === 'NEXT_REDIRECT') throw error;
  console.log(error);
}
