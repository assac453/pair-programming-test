package com.assac453.backend.util.mapper;

import com.assac453.backend.dto.BookDto;
import com.assac453.backend.entity.Book;
import lombok.experimental.UtilityClass;

@UtilityClass
public class DtoToEntity {
    public static Book dtoToEntity(BookDto dto){
        return Book.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .author(dto.getAuthor())
                .yearOfPublishing(dto.getYearOfPublishing())
                .remainCount(dto.getRemainCount())
                .pageCount(dto.getPageCount())
                .build();
    }
}
