export interface ActionTypes {

}

export interface AppAction<P> {
  type: ActionTypes;
  payload: P;
}
