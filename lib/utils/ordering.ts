export function alphabeticalOrder(list: string[]): string[] {
    const result = [...list];

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].toLowerCase() > result[j].toLowerCase()) {
                const temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    return result;
}
