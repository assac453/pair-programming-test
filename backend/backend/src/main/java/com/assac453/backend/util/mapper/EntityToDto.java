package com.assac453.backend.util.mapper;

import com.assac453.backend.dto.BookDto;
import com.assac453.backend.entity.Book;
import lombok.experimental.UtilityClass;

@UtilityClass
public class EntityToDto {
    public static BookDto entityToDto(Book book){
        return BookDto.builder()
                .id(book.getId())
                .yearOfPublishing(book.getYearOfPublishing())
                .title(book.getTitle())
                .author(book.getAuthor())
                .remainCount(book.getRemainCount())
                .pageCount(book.getPageCount())
                .build();
    }
}
