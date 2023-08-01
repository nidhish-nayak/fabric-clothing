export type CurrentUserType = {
	uid: string;
	accessToken?: string | null;
	email?: string | null;
	displayName?: string | null;
	emailVerified?: boolean;
	photoURL?: string | null;
} | null;

export type UserStateType = {
	currentUser: CurrentUserType | null;
	isUserProfileOpen: boolean;
};
