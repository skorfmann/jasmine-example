function AnalysisApi() {
  this.base_url = "http://localhost:3000";
}

AnalysisApi.prototype.addFieldValue = function(field, field_value, callbacks) {
  $.ajax({
    url: this.base_url,
    data: {
      "field_id": field,
      "field_value": field_value,
      "_method": "put"
    },
    type: "POST",
    success: function(data, status, request) {
      callbacks.onSuccess(data);
    },
    complete: function(data, status, request) {
      callbacks.onComplete(data);
    }

  });
};