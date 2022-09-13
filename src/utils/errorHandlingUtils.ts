export function notSend(entity: string) {
	return { code: "NotSent", message: `${entity} not sent!` };
}

export function notFound(message: string) {
	const error: Error = { name: "not_found", message };
	return error;
}

export function invalid(entity: string) {
	return { code: "Invalid", message: `Invalid ${entity}!` };
}

export function expired(entity: string) {
	return { code: "Expired", message: `Expired ${entity}!` };
}

export function notActivated(entity: string) {
	return { code: "NotActivated", message: `${entity} not activated!` };
}

export function activated(entity: string) {
	return { code: "Activated", message: `Activated ${entity}!` };
}

export function blocked(entity: string) {
	return { code: "Blocked", message: `Blocked ${entity}!` };
}

export function unlocked(entity: string) {
	return { code: "Unlocked", message: `${entity} unlocked!` };
}

export function unauthorized(message: string) {
	const error: Error = { name: "unauthorized", message };
	return error;
}

export function conflict(message: string) {
	const error: Error = { name: "conflict", message };
	return error;
}

export function badRequest(message: string) {
	const error: Error = { name: "bad_request", message };
	return error;
}
