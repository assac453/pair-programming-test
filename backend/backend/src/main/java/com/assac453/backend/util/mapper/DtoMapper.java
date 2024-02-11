package com.assac453.backend.util.mapper;

import com.assac453.backend.dto.BookCreateDto;
import com.assac453.backend.dto.BookDto;
import lombok.experimental.UtilityClass;

@UtilityClass
public class DtoMapper {
    public static BookDto toBookDto(BookCreateDto dto){
        return BookDto.builder()
                .author(dto.getAuthor())
                .title(dto.getTitle())
                .remainCount(dto.getRemainCount())
                .yearOfPublishing(dto.getYearOfPublishing())
                .pageCount(dto.getPageCount())
                .build();
    }
}
