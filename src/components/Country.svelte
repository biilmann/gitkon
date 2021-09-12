<script>
    const fetchCountry = (async () => {
        const result = await fetch("/.netlify/functions/country")
        const data = await result.json()
        return data.country
    })()
</script>

{#await fetchCountry}
    <h2>Loading...</h2>
{:then country} 
    <h2>Welcome visitor from {country.name} {country.emoji}</h2>
{/await}