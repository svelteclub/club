<script lang="ts">
	import { fade } from 'svelte/transition'
	import { OnMount, VERSION } from '$lib'

	let transformX = 0,
		transformY = 0,
		screenW = 0,
		screenH = 0

	$: parallaxStyles = (factor = 1): string => `
      transform: translate(${transformX * factor}%, ${transformY * factor}%)
                 rotate(${transformX / 3}deg);
  `

	const parallaxAligner = (e: MouseEvent): void => {
		const halfScreenW = screenW / 2
		const halfScreenH = screenH / 2
		transformX = ((e.clientX - halfScreenW) / halfScreenW) * 5
		transformY = ((e.clientY - halfScreenH) / halfScreenH) * 5
	}
</script>

<svelte:head>
	<title>Svelte Club</title>
</svelte:head>

<svelte:window on:mousemove={parallaxAligner} bind:innerHeight={screenH} bind:innerWidth={screenW} />

<main class="container">
	<OnMount>
		<div class="splash" transition:fade={{ duration: 1000, delay: 400 }}>
			<h1 class="heading">
				<span class="heading--line-one" style={parallaxStyles()}>Join the</span>
				<span class="heading--line-two" style={parallaxStyles(3)}>Svelte Club</span>
				<span class="heading--version" style={parallaxStyles(4)}>
					<span class="heading--version-text">v{VERSION}</span>
				</span>
			</h1>

			<p>Visit <a href="https://beta.svelte.club">beta.svelte.dev</a> to see the live version</p>
		</div>
	</OnMount>
</main>

<style lang="scss">
	@use 'styles/vendor/rfs';
	@use 'styles/vendor/media';

	main {
		display: flex;
		flex-grow: 1;

		min-height: calc(max(100vh - (75px + 43px), 500px));
	}

	.splash {
		align-self: center;

		margin: auto;

		text-align: center;
	}

	.heading {
		cursor: default;
		user-select: none;

		&--line-one,
		&--line-two,
		&--version {
			display: block;
		}

		&--line-one,
		&--line-two {
			@include rfs.font-size(8rem);
			font-weight: 800;
		}

		&--line-one {
			@include rfs.margin-bottom(-2.5rem);
			@include rfs.font-size(6rem);

			@include media.media('>md') {
				@include rfs.margin-bottom(-4.5rem);
			}
		}

		&--line-two {
			background: linear-gradient(rgb(var(--brand-b)), rgb(var(--brand-a)));
			background-clip: text;
			-webkit-text-fill-color: transparent;
			@include media.media('>md') {
				@include rfs.margin-bottom(-1.5rem);
			}
		}

		&--version {
			@include rfs.font-size(0.8rem);

			@include media.media('>md') {
				@include rfs.margin-right(-1.5rem);
				text-align: right;
			}

			&-text {
				@include rfs.padding(0.25rem 0.5rem);
				background-color: rgba(var(--bg), 0.5);
				border: 0.5px solid rgba(var(--grey-15));
				border-radius: 5px;
			}
		}
	}
</style>
