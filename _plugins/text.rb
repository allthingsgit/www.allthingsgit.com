module Text
  def newline_to_space(str)
    str.gsub("\n", " ")
  end
end

Liquid::Template.register_filter(Text)
