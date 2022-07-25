<script lang="ts">
	export let message: string;
</script>

<main>
	<div class="d-flex justify-content-center">
		<div
			class="alert alert-danger text-center"
			style="width: 20%"
			role="alert"
		>
			{message}
		</div>
	</div>
</main>
