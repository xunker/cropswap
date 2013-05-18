class CropSwap.Views.Search extends Backbone.View

  template: JST['search']

  events:
    'submit #search-form': 'search'

  render: ->
    $(@el).html(rwh(@template, {}))
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
      @trigger('update-results')

      return

    error: (model, response) =>
      console.log response
      alert('there was an error')
      return