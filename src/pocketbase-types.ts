/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Agent = "agent",
	Artiste = "artiste",
	Event = "event",
	Maison = "maison",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AgentRecord = {
	email?: string
	nom?: string
	prenom?: string
}

export type ArtisteRecord = {
	Nom?: string
	description?: string
}

export type EventRecord = {
	Artiste?: RecordIdString
	categorie?: string
	date?: IsoDateString
	description?: string
	extrait?: string
	lieu?: string
}

export type MaisonRecord = {
	adresse?: string
	agent?: RecordIdString
	favoris?: boolean
	image?: string
	nbChambres?: number
	nbSdb?: number
	nomMaison?: string
	prix?: number
	surface?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AgentResponse<Texpand = unknown> = Required<AgentRecord> & BaseSystemFields<Texpand>
export type ArtisteResponse<Texpand = unknown> = Required<ArtisteRecord> & BaseSystemFields<Texpand>
export type EventResponse<Texpand = unknown> = Required<EventRecord> & BaseSystemFields<Texpand>
export type MaisonResponse<Texpand = unknown> = Required<MaisonRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	agent: AgentRecord
	artiste: ArtisteRecord
	event: EventRecord
	maison: MaisonRecord
	users: UsersRecord
}

export type CollectionResponses = {
	agent: AgentResponse
	artiste: ArtisteResponse
	event: EventResponse
	maison: MaisonResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'agent'): RecordService<AgentResponse>
	collection(idOrName: 'artiste'): RecordService<ArtisteResponse>
	collection(idOrName: 'event'): RecordService<EventResponse>
	collection(idOrName: 'maison'): RecordService<MaisonResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
