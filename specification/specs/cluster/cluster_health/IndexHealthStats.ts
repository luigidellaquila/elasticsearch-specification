class IndexHealthStats {
	active_primary_shards: integer;
	active_shards: integer;
	initializing_shards: integer;
	number_of_replicas: integer;
	number_of_shards: integer;
	relocating_shards: integer;
	shards: Dictionary<string, ShardHealthStats>;
	status: Health;
	unassigned_shards: integer;
}
