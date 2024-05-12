export function errorApproach(error: any) {
  if (error.message === 'NEXT_REDIRECT') throw error;
  return { error: error.response.data.error ?? error.response.data.errors };
}
