export const loadAnimals = animals => ({
  type: "LOAD_ANIMALS",
  animals
})

export const isLoading = isLoading => ({
  type: "IS_LOADING",
  isLoading
})

export const hasErrored = error => ({
  type: "HAS_ERRORED",
  error
})