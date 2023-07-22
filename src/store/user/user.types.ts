export type CurrentUser = {
	accessToken: string;
	displayName: string;
	email: string;
	emailVerified: boolean;
	photoURL: string;
	uid: string;
};

export type UserState = {
	currentUser: CurrentUser | null;
	isUserProfileOpen: boolean;
};
