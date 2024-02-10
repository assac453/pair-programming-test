package com.assac453.backend.service;

import com.assac453.backend.dto.BookDto;
import com.assac453.backend.entity.Book;

import java.util.List;

public interface BookService {
    BookDto getById(int id);
    List<BookDto> getAll();
    BookDto create(BookDto book);
    BookDto update(int id, BookDto book);
    BookDto delete(int id);
}
