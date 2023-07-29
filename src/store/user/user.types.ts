export type CurrentUser = {
	uid: string;
	accessToken?: string | null;
	email?: string | null;
	displayName?: string | null;
	emailVerified?: boolean;
	photoURL?: string | null;
} | null;

export type UserState = {
	currentUser: CurrentUser | null;
	isUserProfileOpen: boolean;
};
