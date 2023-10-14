interface TPost {
	id: number;
	user: TUser;
	content: string;
	images?: any;
	post_type: string;
	created_at: string;
	views: number;
	likes: any[];
	shared: any[];
	comments: TComment[];
}

interface TComment {
	id: number;
	user: User2;
	content: string;
	created_at: string;
}

interface User2 {
	id: number;
	password: string;
	last_login: string;
	email: string;
	generated_username: string;
	is_staff: boolean;
	is_superuser: boolean;
	is_active: boolean;
	school: TSchool;
	groups: any[];
	user_permissions: any[];
}

interface TSchool {
	id: number;
	name: string;
	school_acronym: string;
}

interface TUser {
	id: number;
	picture?: any;
	generated_username: string;
	school: TSchool;
}

interface TUserDetails {
	id: number;
	user: TUser;
	Level?: any;
	picture?: any;
}
