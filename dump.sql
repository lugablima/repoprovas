--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: disciplines; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.disciplines (
    id integer NOT NULL,
    name text NOT NULL,
    "termId" integer NOT NULL
);


ALTER TABLE public.disciplines OWNER TO postgres;

--
-- Name: disciplines_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.disciplines_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.disciplines_id_seq OWNER TO postgres;

--
-- Name: disciplines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.disciplines_id_seq OWNED BY public.disciplines.id;


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- Name: teachersDisciplines; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."teachersDisciplines" (
    id integer NOT NULL,
    "teacherId" integer NOT NULL,
    "disciplineId" integer NOT NULL
);


ALTER TABLE public."teachersDisciplines" OWNER TO postgres;

--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."teachersDisciplines_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."teachersDisciplines_id_seq" OWNER TO postgres;

--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."teachersDisciplines_id_seq" OWNED BY public."teachersDisciplines".id;


--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teachers_id_seq OWNER TO postgres;

--
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teachers_id_seq OWNED BY public.teachers.id;


--
-- Name: terms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.terms (
    id integer NOT NULL,
    number integer NOT NULL
);


ALTER TABLE public.terms OWNER TO postgres;

--
-- Name: terms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.terms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.terms_id_seq OWNER TO postgres;

--
-- Name: terms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.terms_id_seq OWNED BY public.terms.id;


--
-- Name: tests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tests (
    id integer NOT NULL,
    name text NOT NULL,
    "pdfUrl" text NOT NULL,
    "categoryId" integer NOT NULL,
    "teacherDisciplineId" integer NOT NULL
);


ALTER TABLE public.tests OWNER TO postgres;

--
-- Name: tests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tests_id_seq OWNER TO postgres;

--
-- Name: tests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tests_id_seq OWNED BY public.tests.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: disciplines id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines ALTER COLUMN id SET DEFAULT nextval('public.disciplines_id_seq'::regclass);


--
-- Name: teachers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers ALTER COLUMN id SET DEFAULT nextval('public.teachers_id_seq'::regclass);


--
-- Name: teachersDisciplines id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines" ALTER COLUMN id SET DEFAULT nextval('public."teachersDisciplines_id_seq"'::regclass);


--
-- Name: terms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.terms ALTER COLUMN id SET DEFAULT nextval('public.terms_id_seq'::regclass);


--
-- Name: tests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests ALTER COLUMN id SET DEFAULT nextval('public.tests_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
1b44a590-ef2b-4989-8c85-17e6b1a5a22d	f6683ec8904ac4a52b7bf190ec44030e5d759b5015c8659787ee3388be9fe5b4	2022-09-13 18:09:36.479032+00	20220913180936_add_users_table	\N	\N	2022-09-13 18:09:36.464035+00	1
f050a82d-0368-43f8-aca5-1d4c8c759a35	0c4295639e697844618484e6f801ed3da2353414994c36546fa68555a048f644	2022-09-13 18:15:19.957962+00	20220913181519_add_categories_table	\N	\N	2022-09-13 18:15:19.943242+00	1
3855f123-3311-480c-bae6-8771831556bf	d9dfb8223f67af610c9dbad8bb1aed24e326d0e5fd9708662054573c11eaf919	2022-09-18 01:16:36.031727+00	20220918011635_adds_relationships_between_teachers_categories_and_disciplines_tables	\N	\N	2022-09-18 01:16:35.987517+00	1
1ee0d420-08e0-41cd-ac1e-5cd7f31cf47f	7db236727b3a1f85e8d8cf1fbb2608205f9056b55e1c92bc854e3c00cd66b47c	2022-09-13 18:17:24.142258+00	20220913181724_add_teachers_table	\N	\N	2022-09-13 18:17:24.126016+00	1
0f7900ae-d4c2-4c3a-9d1f-fd434b1def6f	1a5cb9f3d36cc3f67b62a3f4e12ac940a6c95a7d402a0594f9bb3beeac629b5b	2022-09-13 18:18:55.898842+00	20220913181855_add_terms_table	\N	\N	2022-09-13 18:18:55.883123+00	1
af59460a-c8dc-4c20-9b5c-d2aa1bc5158d	8b77e83c5d92a49abda1ff66948a2ada1a44b6d742eb16af628d9dac4a916208	2022-09-13 18:21:10.666737+00	20220913182110_add_disciplines_table	\N	\N	2022-09-13 18:21:10.653917+00	1
f200f3ab-1d3d-4567-b1e2-ea375dccf721	f8797f12f24d6a25fb16d64f774d0ed92885aafe9e69bb636260d16a11be28e4	2022-09-19 12:16:56.739556+00	20220919121656_removes_relationships_between_teachers_disciplines_and_categories_tables	\N	\N	2022-09-19 12:16:56.724078+00	1
127dd728-6ffe-4b87-bd9f-b2af9dba2322	cbfafb36d6eaee88dfdaa42a6c19c66ebdfed1e979a3435e731c55e6feb10e5f	2022-09-13 18:26:30.979211+00	20220913182630_add_relationship_between_terms_and_disciplines_tables	\N	\N	2022-09-13 18:26:30.971406+00	1
66238a00-612b-4b47-a7d2-66bf18460c13	7d4987aa712397b60d9f05f4fcd7cdea71c52b6bd0839fef7de4bb67ae2a9b06	2022-09-13 18:29:27.767724+00	20220913182927_add_teachers_disciplines_table	\N	\N	2022-09-13 18:29:27.757966+00	1
d008250d-bb80-4021-94d8-91ad78351fa5	58300d9ff108669e41a52cf449f0122451e9c7719c9bf9dc8fe91ab61cc9f8f7	2022-09-13 18:34:18.703566+00	20220913183418_add_relationship_between_teachers_disciplines_and_disciplines_tables	\N	\N	2022-09-13 18:34:18.697581+00	1
c39163b2-8186-422b-a039-630a7832e503	5d6a6f33195e4745e33e0aa4c142624f05e625486acb6c87b0f0c22d47437b16	2022-09-13 18:42:12.312729+00	20220913184212_add_relationship_between_teachers_disciplines_and_teachers_tables	\N	\N	2022-09-13 18:42:12.306751+00	1
b3235810-26f8-4c81-932d-69f0cf1d85a8	0296dc5d34ca2e09b61ffd6962aecd4df9ad2fa120513d46791b374dc94e8646	2022-09-13 18:45:44.48845+00	20220913184544_add_tests_table	\N	\N	2022-09-13 18:45:44.475961+00	1
3aedff65-a6fa-4721-8ef0-05117bf6873e	6d069e8af43bb390e05fbfd473224c8589a8739bd1f8ab7bac52eca009385b96	2022-09-13 18:50:28.014793+00	20220913185027_add_relationship_between_teachers_disciplines_and_tests_tables	\N	\N	2022-09-13 18:50:27.909089+00	1
52395870-e90d-4625-af5f-a99783389149	484f7602d2fddb9b90ef7bd2c3534d7d23c9b9cd28a1848b34664ce50738e455	2022-09-13 18:54:02.154433+00	20220913185402_add_relationship_between_categories_and_tests_tables	\N	\N	2022-09-13 18:54:02.146882+00	1
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name) FROM stdin;
1	Projeto
2	Prática
3	Recuperação
\.


--
-- Data for Name: disciplines; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disciplines (id, name, "termId") FROM stdin;
1	HTML e CSS	1
2	JavaScript	2
3	React	3
4	Humildade	1
5	Planejamento	2
6	Autoconfiança	3
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teachers (id, name) FROM stdin;
1	Diego Pinho
2	Bruna Hamori
\.


--
-- Data for Name: teachersDisciplines; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."teachersDisciplines" (id, "teacherId", "disciplineId") FROM stdin;
1	1	1
2	1	2
3	1	3
4	2	4
5	2	5
6	2	6
\.


--
-- Data for Name: terms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.terms (id, number) FROM stdin;
1	1
2	2
3	3
4	4
5	5
6	6
\.


--
-- Data for Name: tests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tests (id, name, "pdfUrl", "categoryId", "teacherDisciplineId") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
1	joao@email.com	$2b$10$0S1NfYww22wES/3p6JbXwO97oe0k3ofXdOB4irEdK2rZSkOGXd6TG
2	teste@email.com	$2b$10$65iRpVt.suCvXUcZuxvOJO/HKnJpHGLmJXn7ZeaX./gszOZqzawwW
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 9, true);


--
-- Name: disciplines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.disciplines_id_seq', 18, true);


--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."teachersDisciplines_id_seq"', 6, true);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 6, true);


--
-- Name: terms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.terms_id_seq', 18, true);


--
-- Name: tests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tests_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: disciplines disciplines_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT disciplines_pkey PRIMARY KEY (id);


--
-- Name: teachersDisciplines teachersDisciplines_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_pkey" PRIMARY KEY (id);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- Name: terms terms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.terms
    ADD CONSTRAINT terms_pkey PRIMARY KEY (id);


--
-- Name: tests tests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: categories_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX categories_name_key ON public.categories USING btree (name);


--
-- Name: disciplines_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX disciplines_name_key ON public.disciplines USING btree (name);


--
-- Name: teachers_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX teachers_name_key ON public.teachers USING btree (name);


--
-- Name: terms_number_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX terms_number_key ON public.terms USING btree (number);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: disciplines disciplines_termId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES public.terms(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teachersDisciplines teachersDisciplines_disciplineId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES public.disciplines(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teachersDisciplines teachersDisciplines_teacherId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES public.teachers(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tests tests_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "tests_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tests tests_teacherDisciplineId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES public."teachersDisciplines"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

