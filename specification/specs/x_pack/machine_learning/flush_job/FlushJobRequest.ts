@rest_spec_name("ml.flush_job")
class FlushJobRequest extends RequestBase {
	@request_parameter()
	skip_time: string;
	advance_time: Date;
	calculate_interim: boolean;
	end: Date;
	start: Date;
}
