describe("Start Cooking page", function() {

  beforeEach(function() {
    jasmine.getFixtures().fixturesPath = 'spec/';
    jasmine.getFixtures().load('index-fake.html');
    renderSplash('#logged-in', '#logged-out', '.container')

    var recipeData = {
      Title: "S'mores Cookies",
      Ingredients: [{name: "unsalted butter", quantity: 11, unit: "tablespoons"}, {name: "baking soda", quantity: 1, unit: "teaspoon"}],
      Instructions: "Preheat the oven to 375 degrees.\n\rLine baking pans with parchment paper.\n\rI used one 11x17 pan and one 9x13 pan but you can really use any sized pans you want.\n\rAdd the flour mixture to the butter mixer and combine on low speed.",
      TotalMinutes: 28,
      YieldNumber: 26,
      YieldUnit: "Servings",
      StarRating: 4.54385964912281,
      ImageURL: "http://redirect.bigoven.com/pics/rs/640/smores-cookies.jpg",
      RecipeID: 208491
    };

    currentRecipe = new Recipe(recipeData);
    currentRecipe.renderView(recipeData);

    Ears = {
      stopListening: function() {},
      resumeListening: function() {},
      generateLanguageModel: function() {},
      say: function() {}
    };

    currentRecipe.openEarsSetup();
    $('#cook-button').trigger('click');
  });

  it('should click the start button', function() {
    var spyEvent = spyOnEvent('.backup-start', 'click');
    spyOn(currentRecipe, "playStart")
    $('.backup-start').trigger('click');
    expect('click').toHaveBeenTriggeredOn('.backup-start');
    expect(spyEvent).toHaveBeenTriggered();
    expect(currentRecipe.playStart).toHaveBeenCalled();
  });

});


  



