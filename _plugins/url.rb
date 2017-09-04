module Url
  def canonicalize_url(url, base)
    if url.include? "://"
      url
    elsif url.start_with? "/"
      uri = URI.parse(base)
      "#{uri.scheme}://#{uri.host}#{url}"
    else
      "#{base}#{url}"
    end
  end
end

Liquid::Template.register_filter(Url)
