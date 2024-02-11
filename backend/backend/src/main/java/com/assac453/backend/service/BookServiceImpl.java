package com.assac453.backend.service;

import com.assac453.backend.dto.BookCreateDto;
import com.assac453.backend.dto.BookDto;
import com.assac453.backend.entity.Book;
import com.assac453.backend.repository.BookRepository;
import com.assac453.backend.util.mapper.DtoMapper;
import com.assac453.backend.util.mapper.DtoToEntity;
import com.assac453.backend.util.mapper.EntityToDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository repository;

    @Override
    public BookDto getById(int id) {
        return EntityToDto.entityToDto(repository.findById(id).orElseThrow());
    }

    @Override
    public List<BookDto> getAll() {
        return repository
                .findAll()
                .stream()
                .map(EntityToDto::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public BookDto create(BookCreateDto book) {
        BookDto bookDto = DtoMapper.toBookDto(book);
        Book saved = repository.save(DtoToEntity.dtoToEntity(bookDto));
        bookDto.setId(saved.getId());
        return bookDto;
    }

    @Override
    public BookDto update(int id, BookCreateDto book) {
        if(!repository.existsById(id)){
            throw new NoSuchElementException("Element not found");
        }
        BookDto bookDto = DtoMapper.toBookDto(book);
        Book updated = DtoToEntity.dtoToEntity(bookDto);
        updated.setId(id);
        repository.save(updated);
        bookDto.setId(id);
        return bookDto;
    }

    @Override
    public BookDto delete(int id) {
        Optional<Book> byId = repository.findById(id);
        if(byId.isEmpty()){
            throw new NoSuchElementException("Element not found");
        }
        Book book = byId.get();
        repository.deleteById(book.getId());
        return EntityToDto.entityToDto(book);
    }
}
