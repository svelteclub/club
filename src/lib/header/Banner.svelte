<small>
	<p class="banner">
		<slot />
		<span class="spacer">|</span>
		<slot name="link" />
	</p>
</small>

<style lang="scss">
	@use 'styles/vendor/rfs';

	p {
		margin: 0;
	}

	.banner {
		@include rfs.padding(1rem 0);
		display: flex;
		align-items: center;
		justify-content: center;

		text-align: center;

		border-bottom: 1px solid rgba(var(--grey-5));
		background-color: rgba(var(--grey-5));
	}

	.spacer {
		@include rfs.padding(0 0.5rem);
		font-weight: 400;

		opacity: 0.2;
	}
</style>
