import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from './configStore'

export const useAppState = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppState: TypedUseSelectorHook<RootState> = useSelector