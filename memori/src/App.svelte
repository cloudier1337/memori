<script>
		import { onMount } from 'svelte';

let characters = ['🐊', '🤔', '✨'];

let confetti = new Array(100).fill()
	.map((_, i) => {
		return {
			character: characters[i % characters.length],
			x: Math.random() * 100,
			y: -20 - Math.random() * 100,
			r: 0.1 + Math.random() * 1
		};
	})
	.sort((a, b) => a.r - b.r);

onMount(() => {
	let frame;

	function loop() {
		frame = requestAnimationFrame(loop);

		confetti = confetti.map(emoji => {
			emoji.y += 0.7 * emoji.r;
			if (emoji.y > 120) emoji.y = -20;
			return emoji;
		});
	}

	loop();

	return () => cancelAnimationFrame(frame);
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
</main>

{#each confetti as c}
	<span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
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