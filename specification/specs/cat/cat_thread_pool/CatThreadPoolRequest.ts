@rest_spec_name("cat.thread_pool")
class CatThreadPoolRequest extends RequestBase {
	@request_parameter()
	format: string;
	@request_parameter()
	headers: string[];
	@request_parameter()
	help: boolean;
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	size: Size;
	@request_parameter()
	sort_by_columns: string[];
	@request_parameter()
	verbose: boolean;
}
