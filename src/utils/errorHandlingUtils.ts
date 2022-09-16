export function notFound(message: string) {
	const error: Error = { name: "not_found", message };
	return error;
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

export function internalServer(message: string) {
	const error: Error = { name: "internal_server_error", message };
	return error;
}
