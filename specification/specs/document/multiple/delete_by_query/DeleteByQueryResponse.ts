class DeleteByQueryResponse extends ResponseBase implements IResponse {
	is_valid: boolean;
	batches: long;
	deleted: long;
	failures: BulkIndexByScrollFailure[];
	noops: long;
	requests_per_second: float;
	retries: Retries;
	slice_id: integer;
	task: TaskId;
	throttled_milliseconds: long;
	throttled_until_milliseconds: long;
	timed_out: boolean;
	took: long;
	total: long;
	version_conflicts: long;
}
