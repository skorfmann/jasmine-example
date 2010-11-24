describe("AjaxMock", function() {
  var analysis, request;
  var onSuccess, onComplete;

  beforeEach(function() {
   onSuccess = jasmine.createSpy('onSuccess');
   onComplete = jasmine.createSpy('onComplete');

   analysis = new AnalysisApi();
   analysis.addFieldValue("field_15", "rot", {
     onSuccess: onSuccess,
     onComplete: onComplete
   });

   request = mostRecentAjaxRequest();
  });

  it("calls api with correct url", function() {
    expect(request.url).toEqual("http://localhost:3000");
  });

  it("calls with right arguments", function() {
    expect(request.params).toEqual("field_id=field_15&field_value=rot&_method=put");
  });

  describe("success", function() {
    beforeEach(function() {
      request.response(TestResponses.analysis.success);
    });

    it("should handle success", function() {
      var successArg = onSuccess.mostRecentCall.args[0];

      expect(onSuccess).toHaveBeenCalledWith("ok");
      expect(onComplete).toHaveBeenCalled();
      expect(successArg).toEqual("ok");
    })
  });
});