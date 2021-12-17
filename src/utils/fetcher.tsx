export async function fetcher<T>(options: RequestInfo): Promise<T> {
    const response = await fetch(options);
    const body = await response.json();

    return body;

}