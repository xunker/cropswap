class window.FormAttributes
  constructor: (form) ->
    @form = form
    return

  attributes: ->
    attributes = {}

    _.each($('input', @form), (element) ->
      element = $(element)

      if element.attr('name') != 'commit'
        if element.attr('type') == "radio"
          if element.is(':checked')
            attributes[element.attr('name')] = element.val()
        else
          attributes[element.attr('name')] = element.val()
    )

    attributes
