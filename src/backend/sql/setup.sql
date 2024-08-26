create table "user" (
    id serial primary key,
    email text not null,
    name text not null,
    password not null,
    created_at timestamptz,
    updated_at timestamptz
);

create table image (
    id serial primary key,
    user_id integer not null,
    url text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    foreign key (user_id) references "user" (id)
);

create table customer (
    id serial primary key,
    user_id integer not null,
    name text not null,
    email text not null,
    phone text not null,
    address text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    foreign key (user_id) references "user" (id)
);

create table product (
    id serial primary key,
    name text not null,
    price integer not null,
    description text not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
   
);