class InlineGet<TDocument> {
	fields: Dictionary<string, LazyDocument>;
	found: boolean;
	source: TDocument;
}
