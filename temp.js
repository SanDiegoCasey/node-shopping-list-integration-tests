it("should update items on PUT", function() {
  const updateData = {
    name: "mushu",
    ingredients: ['pork','sauce']
  };

  return (
    chai
      .request(app)
      .get("/recipes")
      .then(function(res) {
        updateData.id = res.body[0].id;
        return chai
          .request(app)
          .put(`/recipes/${updateData.id}`)
          .send(updateData);
      })
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a("object");
        expect(res.body).to.deep.equal(updateData);
      })
  );
});
