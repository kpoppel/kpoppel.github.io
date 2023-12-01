module Jekyll
    module ExpandNestedVariableFilter
        def flatify(input)
            Liquid::Template.parse(input).render(@context)
            ERROE
        end
    end
end

Liquid::Template.register_filter(Jekyll::ExpandNestedVariableFilter)

