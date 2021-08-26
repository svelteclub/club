<script lang="ts">
	import Hamburger from 'svelte-hamburgers'
	import Banner from './Banner.svelte'
	import Logo from '../logo/Logo.svelte'

	let open = false
</script>

<Banner>
	View our roadmap to v1 <a slot="link" href="https://github.com/svelteclub/">GitHub</a>
</Banner>

<div class="container">
	<header class:mobile-closed={!open}>
		<div class="row logo-row">
			<div class="logo-wrapper">
				<Logo large --width="120px" />
			</div>

			<div class="hamburger-toggle">
				<Hamburger
					bind:open
					--color="rgb(var(--text))"
					--border-radius="0"
					--padding="0"
					--layer-width="1.3rem"
					--layer-height="2px"
					--layer-spacing=".25rem"
				/>
			</div>
		</div>

		<ul class="horizontal-list horizontal-list--v-sm">
			<li><a href="/">REPL</a></li>
			<li><a href="/">Hub</a></li>
		</ul>

		<ul class="horizontal-list horizontal-list--v-sm">
			<li><a href="/">Login</a></li>
			<li class="sign-up"><a href="/">Sign Up</a></li>
		</ul>
	</header>

	<hr />
</div>

<style lang="scss">
	@use 'styles/vendor/rfs';
	@use 'styles/vendor/media';

	header {
		@include rfs.margin-top(1rem);
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		@include media.media('>sm') {
			align-items: center;
			flex-direction: row;
		}

		@include media.media('<=sm') {
			&.mobile-closed {
				max-height: 38px;

				overflow: hidden;
			}
		}
	}

	.logo-row {
		align-items: center;
		@include media.media('<=sm') {
			@include rfs.margin-bottom(1.5rem);
		}
	}

	@include media.media('<=sm') {
		.logo-wrapper {
			margin-right: auto;
		}
	}

	@include media.media('>sm') {
		.hamburger-toggle {
			display: none;
		}
	}

	.sign-up {
		padding: 0.5rem 1rem;

		border-radius: 5px;
		background-color: rgb(var(--text));

		a {
			color: rgb(var(--bg));
		}
	}
</style>
