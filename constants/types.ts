export interface IIncubation {
	date: string;
	topic: string;
	meditation: IbibleVerse;
	text: Text;
	body: string;
	prayer: string[];
	confession: string[];
	further_study: Array<IbibleVerse>;
	footer: string;
	id: number;
}

export interface IbibleVerse {
	text: string;
	reference: string;
}

export interface Text {
	text: string;
	reference: string;
	title: string;
}

export interface IBank {
	id: number;
	name: string;
	bank_code: number | string;
}
