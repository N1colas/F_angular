import { AppMessage } from "./app-message";
import { AppPhoto } from "./app-photo";
import { AppUser } from "./app-user";

export interface AppState {
  currentUser: AppUser | null;
  users: AppUser[];

  messages: AppUser[];

  // Partial Pick Omit
  messageOutgoing: Omit<AppMessage, 'id'> | null;
  messageIncomming: AppMessage[];

  photos: AppPhoto[];
  errors: any[];
}
