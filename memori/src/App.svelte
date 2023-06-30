<script>
import { onMount } from 'svelte';

let ideas = [];
const endpoint = `http://localhost:5263/api/Philosophy/ideas`;

// onMount(async () => {
// 	var headers = { "Access-Control-Allow-Origin" : "*" };
//     const url = `http://localhost:5263/api/ideas/`;

//     fetch(url)
//     .then((response) => {
//         if (!response.ok) {
//             throw new Error(response.error)
//         }
//         ideas = response.json();
//     });
// });
onMount(async function () {
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
});
	
</script>

<main>
	<h1>V MEGLÍ</h1>
	<p class="poem">
		Siva meglà se razliva krog mene,
		skoraj ne vidim pred sabo roké.
		Hišic predmestnih nikoder nobene,
		kakor bi krile jih kalne vodé.
		
		Včasih nekdo mi nasproti pritava,
		ki se je spustil v tekočo to plast,
		kakor da riba ogromna priplava,
		ali grozljiva povodna pošast.
		
		Z jezerom širnim je mesto prekrito,
		plaho se gibljem globoko na dnu.
		Skozi mokroto v prijazno zaščito
		najdem po slutnji si komaj sledu.
		
		Hiši se stari previdno približam,
		v nizko ji smuknem, domačo vežó.
		Vlažne tegobe se urno odkrižam -
		tu sem, v gostilni, in tu je lepó!
		
		Strop je obokan, opažena stena,
		peč je velika in topel je zrak.
		V kuhinji godeta ponev in rena,
		masten obveva me vonj in sladak.
		
		To je zavetje za krasno početje!
		Sonca si točim, srcé se mi vžge.
		Prav je, da zunaj preplavljen ves svet je,
		kakor z vodámi, z valovi meglè!</p>


		<ul>
			{#each ideas as idea}
				<li>{idea}</li>
			{/each}
		</ul>
</main>

{#each ideas as c}
	<span>{c}</span>
{/each}

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.poem {
		white-space: break-spaces;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	
	:global(body) {
		overflow: hidden;
	}

	span {
		position: absolute;
		font-size: 5vw;
		user-select: none;
	}
</style>