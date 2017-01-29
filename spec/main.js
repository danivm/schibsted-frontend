describe("function myAccordion", function() {
  it("should exist url", function(){
    expect( url ).toBeDefined();             
  });
  it("should exist elements", function(){
    expect( elements ).toBeDefined();             
  });  
  it("should exist collapse", function(){
    expect( collapse ).toBeDefined();             
  });
  it("should exist showQuote", function(){
    expect( showQuote ).toBeDefined();             
  });
  it("elements should be an array", function(){
    expect( typeof elements ).toBe("object");
  });
  it("url should be a string", function(){
    expect( typeof url ).toBe("string");
  });
  it("collapse should be a function", function(){
    expect( typeof collapse ).toBe("function");
  });
  it("showQuote should be a function", function(){
    expect( typeof showQuote ).toBe("function");
  });
});