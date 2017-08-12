require 'liquid'
require 'uri'

module TitleCase
  def title_case(str)
    return str.split(' ').map(&:capitalize).join(' ')
  end
end

Liquid::Template.register_filter(TitleCase)
