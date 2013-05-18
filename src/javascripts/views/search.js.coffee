class CropSwap.Views.Search extends Backbone.View

  template: JST['search']

  events:
    'submit #search-form': 'search'

  render: ->
    $(@el).html(rwh(@template, { results: @results}))
    this

  search: (e) ->
    e.preventDefault()

    search_params = {
      term: $('#term').val(),
      lat: (CropSwap.logged_in_user?.latitude || 0.1),
      lon: (CropSwap.logged_in_user?.longitude || 0.1)
    }

    $.ajax
      url:"#{CropSwap.service_base}/search",
      data: JSON.stringify(search_params),
      type:"POST",
      contentType:"application/json",
      dataType:"json",
      success: (data) =>
        console.log('get search success')
        console.log data
        @results = data
        @render()

      error: (data) =>
        console.log data
        alert('error search!')


