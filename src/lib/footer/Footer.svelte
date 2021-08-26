<script lang="ts">
	import PoweredByVercel from './PoweredByVercel.svelte'
	import GitHubIcon from '../icons/GitHubIcon.svelte'
	import { VERSION } from 'svelte/compiler'
	import Logo from '../logo/Logo.svelte'
	import { getYear } from 'date-fns'
</script>

<footer>
	<div class="container">
		<div class="footer-row">
			<ul class="horizontal-list horizontal-list--v-sm">
				<li>
					<a href="https://github.com/svelteclub">
						<GitHubIcon --width="1.3rem" --color="rgb(var(--grey-50))" --margin="0 1rem 0 0" />
					</a>
				</li>
				<li><a href="/">Privacy</a></li>
				<li><a href="/">Terms</a></li>
			</ul>

			<p class="build-info">
				<small>Built with <a href="/">Svelte</a> v{VERSION}</small>
			</p>
		</div>

		<hr class="footer-divider" />

		<div class="footer-row bottom-row">
			<div class="left">
				<Logo large --width="100px" --color="rgb(var(--text))" />
				<span class="vertical-divider" />
				<p class="copyright">
					<small>Copyright &copy; {getYear(new Date())} Svelte Club</small>
				</p>
			</div>

			<a href="https://vercel.com" title="Powered by Vercel">
				<PoweredByVercel --height="2rem" />
			</a>
		</div>
	</div>
</footer>

<style lang="scss">
	@use 'styles/vendor/rfs';
	@use 'styles/vendor/media';

	footer {
		@include rfs.padding(2rem 0);
		background-color: rgba(var(--grey-5));
		border-top: 1px solid rgba(var(--grey-5));
	}

	p {
		margin: 0;
	}

	.copyright {
		font-weight: 300;

		color: rgb(var(--grey-50));
		@include media.media('<=sm') {
			@include rfs.margin(0.5rem 0 3rem);
		}
	}

	.build-info {
		@include media.media('>sm') {
			text-align: right;
		}

		@include media.media('<=sm') {
			@include rfs.margin(1rem 0 0);
		}
	}

	.footer-divider {
		@include rfs.margin(1.2rem 0 1.75rem);
	}

	@include media.media('>sm') {
		.vertical-divider {
			@include rfs.margin(0 1.5rem 0 2rem);
			width: 1px;
			height: 1rem;

			background-color: rgba(var(--grey-15));
		}
	}

	.footer-row,
	.left {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		@include media.media('>sm') {
			align-items: center;
			flex-direction: row;
		}
	}
</style>
