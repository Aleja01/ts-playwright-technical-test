import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../lib/utils/apiHelper';
import { alphabeticalOrder } from '../../lib/utils/ordering';

test('Get Squirtle evolution chain and print ordered names with weight', async ({ }, testInfo) => {
    const client = new ApiHelper();
    await client.init(testInfo.project.use.baseURL as string);

    // Get Squirtle
    const pokemonResponse = await client.get('pokemon/squirtle');
    expect(pokemonResponse.status()).toBe(200);

    const pokemonData = await pokemonResponse.json();
    const speciesUrl = pokemonData.species.url;

    // Get species
    const speciesResponse = await client.get(speciesUrl.replace(testInfo.project.use.baseURL as string, ''));
    expect(speciesResponse.status()).toBe(200);

    const speciesData = await speciesResponse.json();
    const evolutionChainUrl = speciesData.evolution_chain.url;

    // Get evolution chain
    const evolutionResponse = await client.get(
        evolutionChainUrl.replace(testInfo.project.use.baseURL as string, ''));
    expect(evolutionResponse.status()).toBe(200);

    const evolutionData = await evolutionResponse.json();

    // Extract evolution names
    const names: string[] = [];
    let chain = evolutionData.chain;

    while (chain) {
        names.push(chain.species.name);
        chain = chain.evolves_to[0];
    }

    // Order names alphabetically
    const orderedNames = alphabeticalOrder(names);

    // Get weight per pokemon
    for (const name of orderedNames) {
        const response = await client.get(`pokemon/${name}`);
        expect(response.status()).toBe(200);

        const data = await response.json();
        console.log(`Pokemon: ${name} - Weight: ${data.weight}`);
    }

    await client.dispose();
});
