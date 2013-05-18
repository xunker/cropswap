class CropSwap.Views.Search extends Backbone.View

  template: JST['search']

  render: ->
    model = {}
    model.terms = 'xyz'
    $(@el).html(rwh(@template, { model: model}))
    this

  search: (e) ->
    e.preventDefault()

    form = $('#search-form')
    attributes = new FormAttributes(form).attributes()
    @book_id = attributes.book_id

    @model = new CropSwap.Models.Search()
    console.log attributes
    @model.save {terms: attributes.terms, book_id: attributes.book_id}, @responseHandler(form)

  responseHandler: (form) =>
    success: (model, response) =>
      @undoLoading(model)
      @trigger('update-results')

      return

    error: (model, response) =>
      @undoLoading(model)

      if response.status == 422
        errors = new ErrorList response
        view = new CloudReader.Views.ErrorListView el: form, errors: errors
        view.render()
      else
        error = new Error response
        view = new CloudReader.Views.ErrorView el: @el, error: error
        view.render()

      return